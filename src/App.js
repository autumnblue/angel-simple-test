import React from 'react';
import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import { Button, Modal, Table } from 'antd';
import _ from 'lodash';
import { CreateMeeting } from './components/createMeeting';
import './App.css';
import { meetingData } from './constants/staticData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meetingTitle: '',
      meetingTime: null,
      meetingTimeString: '',
      isOpenModal: false,
      meetingArr: meetingData
    }
  }

  onChangeTitle = title => {
    this.setState({ meetingTitle: title });
  };

  onChangeTime = (time, timeString) => {
    // this.setState({ meetingTime: time });
    this.setState({ meetingTimeString: timeString });
  };

  handleOk = () => {
    this.setState({ isOpenModal: false }, () => {
      let newState = _.cloneDeep(this.state.meetingArr);
      newState.push({ key: this.state.meetingArr.length + 1, title: this.state.meetingTitle, time: this.state.meetingTimeString });
      this.setState({ meetingArr: newState });
    });
  };

  handleCancel = () => {
    this.setState({ isOpenModal: false });
  };

  openModal = () => {
    this.setState({ isOpenModal: true });
  };

  render() {
    const columns = [
      {
        key: 'key',
        dataIndex: 'key',
        title: 'Key'
      },
      {
        key: 'title',
        dataIndex: 'title',
        title: 'Meeting Title'
      },
      {
        key: 'time',
        dataIndex: 'time',
        title: 'Meeting Time'
      }
    ];
    return (
      <div className="App">
        <div className={'header-part'}>
          <p className={'title'}>Meetings</p>
          <Button type="primary" onClick={this.openModal}>
            Create new meeting
          </Button>
        </div>
        <Table
          dataSource={this.state.meetingArr}
          columns={columns}
          rowKey={'key'}
          pagination={false}
        />
        <Modal
          visible={this.state.isOpenModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <CreateMeeting
            title={this.state.meetingTitle}
            onChangeTitle={this.onChangeTitle}
            onChangeTime={this.onChangeTime}
          />
        </Modal>
      </div>
    )
  }
}

export default App;
