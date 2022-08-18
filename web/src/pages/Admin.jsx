import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button, Container, Card, Form, InputGroup } from "react-bootstrap";
import { usePostData } from '../hooks/useData';

export const Admin = () => {

    const [topic, postTopic] = usePostData(process.env.REACT_APP_API_URL+'/admin/add/category')
    const [lesson, postLesson] = usePostData(process.env.REACT_APP_API_URL+'/admin/add/')

    console.log(topic, lesson)

    const [st, setSt] = React.useState({})
    
      return (
        <Container>
            <Card>
                <Container>
                <h2>Add lesson</h2>

                <Form.Control
                    placeholder="Title"
                    aria-label="Title"
                    // aria-describedby="basic-addon1"
                    onChange={e=>setSt((pr)=>({...pr, "title": e.target.value}))}
                />

                <Form.Control
                    placeholder="topic"
                    aria-label="topic"
                    // aria-describedby="basic-addon1"
                    onChange={e=>setSt((pr)=>({...pr, "topic": e.target.value}))}
                />
                

                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    // onChange={(editor)=>setSt(editor.data)}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setSt((pr)=>({...pr, "text": data}));
                        console.log(st)
                    } }
                >
                </CKEditor>
                <Button type="submit" onClick={()=>postLesson(st)}>Submit</Button>
                </Container>
            </Card>
            <Card>
                <Container>
                <h1>Add topic</h1>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Name of topic"
                    aria-describedby="basic-addon2"
                    onChange={(e)=> setSt(e.target.value)}
                    />
                    <Button variant="outline-secondary" onClick={()=>postTopic({"title":st, "text":'text'})} id="button-addon2">
                    Add
                    </Button>
                </InputGroup>
                </Container>
            </Card>
        </Container>
      );
}

// Introdution to CSS.



// What is CSS?



// CSS is a Cascading Style Sheets. It means that it`s only a style markup language(not programming language).



// It is used to style HTML pages. It is color of text (color), position of text (text-align)