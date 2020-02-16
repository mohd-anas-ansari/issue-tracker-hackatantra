import React from 'react';

class RaiseIssue extends React.Component {
  constructor() {
    super();
    this.state = {
      //   user: '',
      title: '',
      description: '',
      //   tags: [],
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const issue = {
      title: this.state.title,
      descritpion: this.state.description,
      tags: this.state.tags,
    };

    if (!issue.title || !issue.descritpion) {
      return alert('Please enter title, description and the tags!');
    }

    fetch('http:localhost:3000/api/v1/issue/create', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(issue => {
        console.log(issue, 'issue created');
      });
  };

  render() {
    const { title, description, tags } = this.state;
    return (
      <section className='form_section'>
        <div className='container form_wrapper issue_form'>
          <form className='login_from'>
            <h3 className='heading'>Your Issue</h3>
            <input
              type='text'
              name='title'
              placeholder='Title'
              className='user_info'
              onChange={this.handleChange}
              value={title}
            />
            <textarea
              name='issue_description'
              placeholder='Describe'
              name='description'
              cols='22'
              rows='6'
              className='user_info'
              //   style={{ resize: none }}
              onChange={this.handleChange}
              value={description}
            ></textarea>
            {/* <div className='add_tag_wrapper'>
              <select
                name='select_issue'
                id='select_issue'
                className='dropdown_btn'
              >
                <option value='0'>SELECT ISSUE</option>
                <option value='water'>Water</option>
                <option value='elctricity'>Electricity</option>
                <option value='food'>Food</option>
              </select>
            </div> */}

            <input
              type='submit'
              className='submit_btn'
              value='Submit'
              onChange={this.handleSubmit}
            />
          </form>
        </div>
      </section>
    );
  }
}

export default RaiseIssue;
