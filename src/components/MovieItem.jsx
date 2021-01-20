import React from "react";
import "../index.css";
export const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image:
    "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2018%2F04%2Fimage001.jpg",
  overview:
    "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. "
};

const Image = (props) => {
  return <img width="100%" src={props.src} alt={props.alt} />;
};

// export const MovieItem = (props) => {
//   console.log(props);
//   const {
//     data: { title, vote_average, image }
//   } = props;
//   return (
//     <div>
//       <Image src={image} alt={title} />
//       <p>{title}</p>
//       <p>{vote_average}</p>
//     </div>
//   );
// };

// MovieItem = new React.Component()
export class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }
  toogleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };
  render() {
    const {
      data: { title, image, vote_average, overview }
    } = this.props;
    return (
      <div style={{ width: "250px", height: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toogleOverview}>
            {this.state.show ? "Hide" : "Show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn--like" : ""}
          >
            Like
          </button>
        </div>

        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}
