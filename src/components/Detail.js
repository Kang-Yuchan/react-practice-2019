import React from 'react';
import './Detail.css';
class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		if (location.state === undefined) {
			history.push('/');
		}
	}
	render() {
		const { location } = this.props;
		console.log(location.state);
		return (
			<div className="detail">
				<div className="detail__img">
					<img src={location.state.poster} alt="title" title={location.state.title} />
				</div>
				<div className="detail__data">
					<h3 className="detail__title">{location.state.title}</h3>
					<h5 className="detail__year">{location.state.year}</h5>
					<ul className="detail__genres">
						{location.state.genres.map((genre, index) => (
							<li key={index} className="genres__genre">
								{genre}
							</li>
						))}
					</ul>
					<div className="detail__summary">
						<p>{location.state.summary}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Detail;
