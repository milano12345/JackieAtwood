import React from "react";

export default function Contact() {
    return (
        <div>
            <p>Contact</p>
            <form>
                <label>Name: </label>
                <input
                    type="text"
                    placeholder="*Required"
                />
                <label>E-mail: </label>
                 <input
                    type="text"
                    placeholder="*Required"
                />
                <label>Phone: </label>
                 <input
                    type="text"
                    placeholder="*Required"
                />
                <label>Subject: </label>
                 <input
                    type="text"
                    placeholder="*Required"
                />
                <label>Your Message: </label>
                 <textarea
                    type="text"
                    placeholder="*Required"
                />
                <label>Prefered Method of Contact: </label>
                <label>E-mail</label>
                <input
                    required
                    type="checkbox"
                />
                   <label>Phone</label>
                <input
                    required
                    type="checkbox"
                />
            </form>
        </div>
    )
}