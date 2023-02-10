import React from "react";
import PersonActing from "../../ui/personActing/PersonActing";
import "./persondetail.scss";

const PersonDetail = () => {
  return (
    <div className="persondetail">
      <PersonActing
        year={2024}
        nameMovie="Born a Crime"
        nameVoice="Patricia Nombuyiselo Noah"
      />
      <PersonActing
        year={2024}
        nameMovie="Born a Crime"
        nameVoice="Patricia Nombuyiselo Noah"
      />
      <PersonActing
        year={2024}
        nameMovie="Born a Crime"
        nameVoice="Patricia Nombuyiselo Noah"
      />
    </div>
  );
};

export default PersonDetail;
