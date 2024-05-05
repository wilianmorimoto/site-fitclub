import "./Programs.css";
import {programsData} from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
	return (
		<div id="programs" className="programs">
			<div className="programs-header">
				<span className="stroke-text">Explore our</span>
				<span>Programs</span>
				<span className="stroke-text">To shape you</span>
			</div>

			<div className="program-categories">
				{programsData.map(program => (
					<div key={program.heading} className="category">
						{program.image}
						<span>{program.heading}</span>
						<span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Programs;
