import React, { useState, useEffect, RefCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import dayjs from 'dayjs';

import { Input } from 'ui/atoms';
import { useOnClickOutside } from 'libs/hooks/useOnClickOutside';
import { DAYS_OF_THE_WEEK, MONTHS } from 'ui/molecules/datepicker/constants';

type Props = {
  placeholder: string;
  name: string;
  myRef: RefCallback<HTMLInputElement>;
};

export function Datepicker({ name, placeholder, myRef }: Props): JSX.Element {
  const ref = useRef();
  const [isOpen, setOpen] = useState(false);
  const today = new Date();
  const weekendDays = [6, 0]; // Saturday and Sunday
  const [date, setDate] = useState(today);
  const [dateValue, setDateValue] = useState('');
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(dayjs().date(1).day() || 7);

  useOnClickOutside(ref, () => setOpen(false));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(dayjs(date).date(1).day() || 7);
    setDateValue(dayjs(date).format('DD/MM/YYYY'));
  }, [date]);

  function handleFocusInput() {
    setOpen(true);
  }

  const handleSelectDate = (d: number) => (e: any) => {
    setDate(new Date(year, month, d));
    setOpen(false);
  };

  function setNextMonth() {
    setDate(dayjs(date).add(1, 'month').toDate());
  }

  function setPrevMonth() {
    setDate(dayjs(date).subtract(1, 'month').toDate());
  }

  return (
    <DatepickerWrapper ref={ref}>
      <Input
        myRef={myRef}
        name={name}
        placeholder={placeholder}
        onClick={handleFocusInput}
        onChange={(e: any) => setDateValue(e.target.value)}
        value={dateValue}
      />
      <Frame isOpen={isOpen}>
        <Header>
          <Button onClick={setPrevMonth}>Prev</Button>
          <div>
            {MONTHS[month]} {year}
          </div>
          <Button onClick={setNextMonth}>Next</Button>
        </Header>
        <Body>
          {DAYS_OF_THE_WEEK.map((d) => (
            <Day key={d}>
              <strong>{d}</strong>
            </Day>
          ))}
          {Array(dayjs(date).daysInMonth() + (startDay - 1))
            .fill(null)
            .map((_, index) => {
              const d = index - (startDay - 2);
              const isDisplayDay = d > 0;
              const isWeekendDay =
                isDisplayDay && weekendDays.includes(dayjs(date).date(d).day());
              return (
                <Day
                  key={index}
                  isToday={d === today.getDate()}
                  isSelected={d === day}
                  isDisplayDay={isDisplayDay}
                  isWeekendDay={isWeekendDay}
                  onClick={handleSelectDate(d)}
                >
                  {isDisplayDay ? d : ''}
                </Day>
              );
            })}
        </Body>
      </Frame>
    </DatepickerWrapper>
  );
}

const DatepickerWrapper = styled.div`
  position: relative;
`;

const Frame = styled.div<{ isOpen: boolean }>`
  width: 300px;
  margin-top: 10px;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
  background-color: white;
  position: absolute;
  z-index: 10;

  ${(props) =>
    !props.isOpen &&
    css`
      display: none;
    `}
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fa;
`;

const Button = styled.div`
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div<{
  isToday?: boolean;
  isSelected?: boolean;
  isDisplayDay?: boolean;
  isWeekendDay?: boolean;
}>`
  width: 13.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.isSelected &&
    css`
      border: 1px solid #4e8098;
      width: 13%;
      height: 38px;
    `}
  
  ${({ isWeekendDay }) =>
    isWeekendDay &&
    css`
      color: red;
    `}
  ${({ isDisplayDay }) =>
    isDisplayDay &&
    css`
      &:hover {
        background-color: #eef6fb;
      }
    `}
`;
