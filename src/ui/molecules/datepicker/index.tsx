import React, { useState, useEffect, RefCallback } from 'react';
import styled, { css } from 'styled-components';
import daysjs from 'dayjs';

import { Input } from 'ui/atoms';
import {
  DAYS,
  DAYS_LEAP,
  DAYS_OF_THE_WEEK,
  MONTHS,
} from 'ui/molecules/datepicker/constants';

type Props = {
  placeholder: string;
  name: string;
  myRef: RefCallback<HTMLInputElement>;
};

export function Datepicker({ name, placeholder, myRef }: Props): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const today = new Date();
  const [date, setDate] = useState(today);
  const [dateValue, setDateValue] = useState(null);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
    setDateValue(daysjs(date).format('DD/MM/YYYY'));
  }, [date]);

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  function getStartDayOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function handleFocusInput() {
    setOpen(true);
  }

  const handleSelectDate = (d: any) => (e: any) => {
    setDate(new Date(year, month, d));
    setOpen(false);
  };
  return (
    <div>
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
          <Button onClick={() => setDate(new Date(year, month - 1, day))}>
            Prev
          </Button>
          <div>
            {MONTHS[month]} {year}
          </div>
          <Button onClick={() => setDate(new Date(year, month + 1, day))}>
            Next
          </Button>
        </Header>
        <Body>
          {DAYS_OF_THE_WEEK.map((d) => (
            <Day key={d}>
              <strong>{d}</strong>
            </Day>
          ))}
          {Array(days[month] + (startDay - 1))
            .fill(null)
            .map((_, index) => {
              const d = index - (startDay - 2);
              return (
                <Day
                  key={index}
                  isToday={d === today.getDate()}
                  isSelected={d === day}
                  onClick={handleSelectDate(d)}
                >
                  {d > 0 ? d : ''}
                </Day>
              );
            })}
        </Body>
      </Frame>
    </div>
  );
}

const Frame = styled.div<{ isOpen: boolean }>`
  width: 400px;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;

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

const Day = styled.div<{ isToday?: boolean; isSelected?: boolean }>`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid #eee;
    `}

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #eee;
    `}
`;

function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
