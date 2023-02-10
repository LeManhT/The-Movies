import React from 'react'
import './personSidebar.scss'
import Description from '../../../ui/description/Description'
import ShortcutText from '../../../ui/shortcutText/ShortcutText'
import Button from '../../../ui/button/Button'

const PersonSidebar = ({ dataPerson }) => {
    return (
        <div className="person__sidebar__wrapper">
            <div className="person__profile">
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${dataPerson?.profile_path}`} alt="" />
            </div>

            <div className="person__info">
                <div className="person__info__title">
                    <h2>Personal Info</h2>
                </div>
                <div className="person__info__detail">
                    <Description title={"Known For"} desc={dataPerson?.known_for_department} />
                </div>

                <div className="person__info__detail">
                    <Description title={"Known Credits"} desc={dataPerson?.known_for_department} />
                </div>

                <div className="person__info__detail">
                    <Description title={"Gender"} desc={dataPerson?.gender === 1 ? "Female" : "Male"} />
                </div>

                <div className="person__info__detail">
                    <Description title={"Birthday"} desc={dataPerson?.birthday} />
                </div>

                <div className="person__info__detail">
                    <Description title={"Place of birth"} desc={dataPerson?.place_of_birth} />
                </div>

                <div className="person__info__detail">
                    <Description title={"Also known as"} desc={dataPerson?.also_known_as[0]} />
                </div>

                <div className="edit__btn" style={{ marginTop: "30px" }}>
                    <Button styleCss={{
                        backgroundColor: "rgba(1, 180, 228, 1)", color: "white", fontSize: "0.9em", borderRadius: '20px',
                        padding: "10px 20px", fontWeight: "700"
                    }} > <p style={{ textTransform: "uppercase" }}>Edit Page</p> </Button>
                </div>


                <div className="shortcut">
                    <ShortcutText backgroundImage={"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-357-keyboard-4de4fe2896d6ba568aeb8c07d250a99374f086554ffd4b1f7645d69325b979ab.svg"}>
                        <span>Keyboard Shortcuts</span>
                    </ShortcutText>

                    <ShortcutText backgroundImage={"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-933-speech-bubble-alert-b33d276606a1a76a1a612c9a7043dfd275ddf0ac55587a5e6a621323db6c488a.svg"}>
                        <span>Report an issue</span>
                    </ShortcutText>
                </div>

            </div>
        </div>
    )
}

export default PersonSidebar