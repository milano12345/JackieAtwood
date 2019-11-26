import React from "react";
import styled from 'styled-components'


import { ContactForm, Label, FormBottom, LabelBottom, TextArea } from "../styling/ContactStyle";

export default function Contact() {
    return (
        <ContactForm>
            <p>Contact</p>
            <form>
                <Label>Name: </Label>
                <input
                    type="text"
                    placeholder="*Required"
                />
                <Label>E-mail: </Label>
                 <input
                    type="text"
                    placeholder="*Required"
                />
                <Label>Phone: </Label>
                 <input
                    type="text"
                    placeholder="*Required"
                />
                <Label>Subject: </Label>
                 <input
                    type="text"
                    placeholder="*Required"
                />
                <Label>Your Message: </Label>
                 <textarea
                    type="text"
                    placeholder="*Required"
                />
            </form>
        </ContactForm>
    )
}
