'use client'
import { Button } from "@heroui/button";
import {Form} from "@heroui/form";
import {Input} from "@heroui/input";
import {Textarea} from "@heroui/input";
import {Select, SelectItem} from "@heroui/select";
import { useState } from "react";

const ContactForm = () => {
    const [submitStatus, setSubmitStatus] = useState(null);
    const subjectItems = [
        {key: "question", label: "Ask Me a Question"},
        {key: "employment", label: "Give Me a Job"},
        {key: "bug", label: "Report a Bug"},
        {key: "feedback", label: "Send Feedback"},
        {key: "other", label: "Something Else"},
    ]
    return (
        <Form 
            className="flex w-full  md:flex-nowrap gap-4"
            onReset={() => setSubmitStatus(null)}
            onSubmit={async(e) => {
                e.preventDefault();
                setSubmitStatus('isSubmitting');
                const data = Object.fromEntries(new FormData(e.currentTarget));
                const res = await fetch('/contact/api', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                })
                const { response } = await res.json();
                setSubmitStatus(response)
            }}
        >
            <div className="grid sm:grid-cols-2 w-full gap-2">
                <Input 
                    name="firstName"
                    label="First Name" 
                    type="text" 
                    isRequired
                    isDisabled={submitStatus === 'success'}
                    errorMessage="Please enter a First name" 
                />
                <Input 
                    name="lastName"
                    label="Last Name" 
                    type="text" 
                    isRequired
                    isDisabled={submitStatus === 'success'}
                    errorMessage="Please enter a Last name"
                />
            </div>
        
            <Input 
                name="email"
                label="Email" 
                type="email"
                isRequired
                isDisabled={submitStatus === 'success'}
                errorMessage="Please enter a valid email" 
            />
            <Select 
                label="Subject" 
                isRequired 
                errorMessage="Select a Subject" 
                name="subject" 
                isDisabled={submitStatus === 'success'}
            >
                {subjectItems.map(({ key, label }) => (
                    <SelectItem key={label}>{label}</SelectItem>
                    ))}
            </Select>
            <Textarea 
                label="Message"
                isRequired
                isDisabled={submitStatus === 'success'}
                errorMessage="Enter your message"
                name="message"
            />

            <div className="flex flex-col-reverse sm:flex-row w-full gap-2 justify-between">
                <Button size="lg" color="primary" variant="bordered" type="reset">
                    Reset
                </Button>
                <Button 
                    size='lg' 
                    type="submit" 
                    color="primary"
                    isDisabled={submitStatus !== null}
                    isLoading={submitStatus === 'isSubmitting'}
                >
                    Send
                </Button>
            </div>
            <p className="italic text-red-500 text-sm">
                {submitStatus === 'fail' ? 'Message not sent. Something went wrong. Please try again.' : ''}
            </p>
            
        </Form>
    );
}

export default ContactForm;