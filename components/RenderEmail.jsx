import { Body, Container, Head, Html, Preview, Section, Text, Img, Tailwind } from "@react-email/components";

    export const RenderEmail = ({ firstName, lastName, message }) => {
        return (
            <Tailwind>
                <Html>
                    <Head />
                    <Preview>{firstName} {lastName} Sent you a message!</Preview>
                    <Body className='bg-[#f6f9fc] p-12 min-h-screen'>
                        <Container className='bg-white border border-black rounded-lg  max-w-xl overflow-hidden'>
                            <Section className="bg-slate-200 py-4">
                                <Img
                                    src={`https://www.blueprintwebdev.com/_next/image?url=%2Fimages%2FBlueprint%20Logos%20border.png&w=128&q=75`}
                                    width="100"
                                    height="auto"
                                    alt="Bivens Blueprint Logo"
                                    className="mx-auto"
                                />
                            </Section>
                            
                            <Section className="max-w-lg">
                                <Text className="font-bold">
                                    {firstName} said:
                                </Text>
                                <Text style={text}>
                                    {message}
                                </Text>
                            </Section>
                        </Container>
                    </Body>
                </Html>
            </Tailwind>
        );
    };


    const text = {
        fontSize: "16px",
        fontFamily: "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
        fontWeight: "300",
        color: "#404040",
        lineHeight: "26px",
    };