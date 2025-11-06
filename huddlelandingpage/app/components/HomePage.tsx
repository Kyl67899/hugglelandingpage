import Image from "next/image";
import React from "react";

export default function HomePage() {
    return (
        <>
            <section id="hero" className="hero">
                <div className="hero--container">
                    <div className="hero--content">
                        <h1 className="hero--title">
                            Build The Community Your Fans Will Love
                        </h1>
                        <p className="hero--description">
                            Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                            Create connections with your users as you engage in genuine discussion.
                        </p>
                        <button className="hero--btn btn-primary">
                            <a href="#" className="">
                                Get Started For Free
                            </a>
                        </button>
                    </div>
                    <div className="hero--image">
                        <Image className="img--hero" width={50} height={50} src="./images/screen-mockups.svg" alt="Hero Image" />
                    </div>
                </div>

                <div className="hero--stats">
                    <div className="stats">
                        <Image width={50} height={50} src="./images/icon-communities.svg" alt="icon communities" className="stats--icon" />
                        <h1 className="stats--number">
                            1.4k+
                        </h1>
                        <p className="stats--text">
                            Communities Formed
                        </p>
                    </div>
                    <div className="stats">
                        <Image width={50} height={50} src="./images/icon-messages.svg" alt="messages" className="stats--icon" />
                        <h1 className="stats--number">
                            2.7m+
                        </h1>
                        <p className="stats--text">
                            Messages Sent
                        </p>
                    </div>
                </div>
            </section>

            <section id="grow" className="grow">
                {/* image bg section top desktop 1 */}
                {/* <img className="grow-1" style="background-color: black;" src="./images/bg-section-top-desktop-1.svg" alt="bg section top 1"> */}
                <div className="grow--content">
                    <div className="grow--text">
                        <h2 className="grow--title">
                            Grow Together
                        </h2>
                        <p className="grow--description">
                            Generate meaningful discussions with your audience and build a strong, loyal community.
                            Think of the insightful conversations you miss out on with a feedback form.
                        </p>
                    </div>
                    <div className="grow--image">
                        <Image width={50} height={50}  src="./images/illustration-grow-together.svg" alt="Grow Together Image" className="img--grow" />
                    </div>
                </div>
                {/* image bg section bottom desktop 1 */}
                {/* <img className="grow-1" style="background-color: black;" src="./images/bg-section-bottom-desktop-2.svg" alt="bg section top 1"> */}
            </section>

            <section id="flowing" className="flowing">
                {/* image  */}
                {/* <img src="./images/bg-section-top-desktop-1.svg" alt="bg section top 1"> */}
                <div className="flowing-content">
                    <div className="flowing--image">
                        <Image className="flow--img" width={50} height={50} src="./images/illustration-flowing-conversation.svg" alt="communities" />
                    </div>
                    <div className="flowing--text">
                        <h2 className="flowing--title">
                            Flowing Conversations
                        </h2>
                        <p className="flowing--conversation">
                            You wouldn't paginate a conversation in real life, so why do it online? Our threads have
                            just-in-time loading for a more natural flow.
                        </p>
                    </div>
                </div>
                {/* <img src="./images/bg-section-top-desktop-1.svg" alt="bg section top 1"> */}
            </section>

            <section id="users" className="users">
                {/* image background section top desktop 2 */}
                {/* <img src="./images/bg-section-top-desktop-1.svg" alt="bg section top 1"> */}
                <div className="user--content">
                    <div className="user--text">
                        <h2 className="user--title">
                            Your Users
                        </h2>
                        <p className="user-description">
                            It takes no time at all to integrate Huddle with your app's authentication solution. This means,
                            once signed in to your app, your users can start chatting immediately.
                        </p>
                    </div>
                    <div className="user--image">
                        <Image className="user-img" width={50} height={50} src="./images/illustration-your-users.svg" alt="users" />
                    </div>
                </div>
                {/* image background section bottom desktop 2 */}
                {/* <img src="./images/bg-section-top-desktop-1.svg" alt="bg section top 1"> */}
            </section>

            <section id="btn" className="btn--section">
                <div className="btn-box">
                    <h1 className="btn--title">
                        Ready To Build Your Community?
                    </h1>
                    <button className="btn-primary">
                        <a href="" className="">
                            Get Started For Free
                        </a>
                    </button>
                </div>
            </section>
        </>
    )
}