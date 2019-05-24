import React from 'react';
import { Input, TimePicker } from 'antd';
import moment from 'moment';
import './style.css';

export const CreateMeeting = ({ title, onChangeTitle, onChangeTime }) => {
  return (
    <div>
      <div>
        <p>Meeting title</p>
        <Input
          placeholder="please type meeting title"
          value={title}
          onChange={(e) => onChangeTitle(e.currentTarget.value)}
        />
      </div>
      <div>
        <p>Meeting time</p>
        <TimePicker
          onChange={onChangeTime}
          defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
        />
      </div>
    </div>
  )
};