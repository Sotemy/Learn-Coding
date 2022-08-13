import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button, Container, Card } from "react-bootstrap";

export const Admin = () => {

    const [st, setSt] = React.useState("")
    
      return (
        <Container>
            <Card>
                <Container>
                <h2>Add lesson</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    // onChange={(editor)=>setSt(editor.data)}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setSt(data);
                    } }
                >
                </CKEditor>
                <Button type="submit" onClick={()=>console.log(st)}>Submit</Button>
                </Container>
            </Card>
        </Container>
      );
}

// Introdution to CSS.



// What is CSS?



// CSS is a Cascading Style Sheets. It means that it`s only a style markup language(not programming language).



// It is used to style HTML pages. It is color of text (color), position of text (text-align)