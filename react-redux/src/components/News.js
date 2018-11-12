import React, { Component } from 'react'

export class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  getNews = () => {
    // alert("Ok")
    this.props.actions.getHeadlines()
  }
  render() {
    return (
      <div>
        <h2> Today's Headline..</h2>
        <button onClick={this.getNews}>
          GET NEWS
        </button>
        {this.props.news.isLoad &&
          <div>
            {this.props.news.articles.map((data, key) => (
              <div key={key}>
                {data.title}
              </div>
            ))}
            <div>

              {/* {this.props.news.articles.totalResults} */}
            </div>
            {/* ---------------- */}
          </div>
        }

      </div>
    )
  }
}

export default News
