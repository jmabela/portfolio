import React from 'react'


export default function Info() {
    return (
        <div className='info'>
            <img className='info--image' src='https://hips.hearstapps.com/hmg-prod/images/7s5a5614-jpg-6501f40f7ee07.jpg?crop=1.00xw:0.669xh;0,0.0647xh&resize=1200:*' />
            <h1 className='info--name'>Josselyn Alvarado</h1>
            <h2 className='info--title'>Full Stack Software Engineer</h2>
            <h3 className='info--website'>website</h3>
            <div className='buttons'> 
                <a href="mailto:josselyn53@gmail.com">
                    <button type='button' className='email-button'>Email</button>
                </a>
                <a href="https://www.linkedin.com/in/josselynalvarado" target="_blank">
                    <button className='linkedin-button'>LinkedIn</button>
                </a>
            </div>

            <h2 className='info--about'>About</h2>
            <p>I am a </p>
            <h2 className='info--interests'>Interests</h2>
            <p>food</p>
        </div>
    )
}