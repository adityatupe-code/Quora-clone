import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://cdn.xxl.thumbs.canstockphoto.com/history-magnifying-glass-focused-on-the-word-history-stock-photo_csp17505425.jpg"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/13/08/54/brain-2062057__480.jpg"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/887636042/photo/the-start-of-something-delicious.jpg?s=612x612&w=0&k=20&c=2T_BCJQhhkfohcbcDZ14OV8rPStICJ9Q1_YjGUW2wCo="
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?q=10&h=200"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.xxl.thumbs.canstockphoto.com/health-insurance-concept-stock-photography_csp4847900.jpg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1409271522/photo/the-mans-hands-are-holding-black-with-yellow-clapper-board-or-movie-slate-on-yellow-background.jpg?b=1&s=170667a&w=0&k=20&c=vb-Ae8pOyZ3VwIJjqj5mv1gud1bWrntZxAsMFOIlEpc="
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak="
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/education-study-books-high-school-university-16383080.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
