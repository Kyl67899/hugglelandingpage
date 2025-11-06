import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer--image">
                        <Image src="/images/logo.svg" alt="logo" className="footer--logo" width={120} height={28} />
                    </div>
                    <div className="footer--text">
                        <p className="footer--description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia
                            vestibulum a, ultrices quis sem.
                        </p>
                    </div>
                    <div className="footer--socials">
                        <div className="footer-phone">
                            <Image width={50} height={50} src="/images/icon-phone.svg" alt="icon phone" className="footer--phone-icon" />
                                Phone: <a href="tel:+1-543-123-4567">+1-543-123-4567</a>
                        </div>
                        <div className="email">
                            <Image width={50} height={50} src="/images/icon-email.svg" alt="icon email" className="footer--email-icon" />
                                <a href="mailto:example@huddle.com">example@huddle.com</a>
                        </div>
                    </div>
                    <div className="socials">
                        <a href="#" className="social--icons">
                            <svg className="social--icons" xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 640 640">
                                <path
                                    d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
                            </svg>
                        </a>
                        <a href="#" className="social--icons">
                            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 640 640">
                                <path className="social--icons"
                                    d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
                            </svg>
                        </a>
                        <a href="#" className="social--icons">
                            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 640 640">
                                <path className="social--icons"
                                    d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="newsletters">
                    <h2 className="newsletter-title">
                        Newsletter
                    </h2>
                    <p className="newsletter-description">
                        To receive tips on how to grow your community, sign up to our weekly newsletter. We’ll never
                        send you spam or pass on your email address.
                    </p>
                    <div className="newsletter-input">
                        <input type="email" placeholder="Enter your email address" />
                            <button className="btn-primary">
                                Subscribe
                            </button>
                    </div>
                </div>
            </footer>

            <div className="attribution--footer">
                <p className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io/" target="_blank">Frontend Mentor</a>.
                    Coded by <a href="https://kylepprofile.dev">Kyle Parsotan</a>.
                </p>
            </div>
        </>
    )
}
