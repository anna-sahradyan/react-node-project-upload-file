import React, {useRef, useState} from 'react';
import {
    Button,
    ButtonUpload,
    Container,
    Form,
    Input,
    Title,
    Wrapper,
    Image,
    Ul,
    Li, BoxUpload
} from "../styledComponents/uploadStyle";


const UploadFile = () => {
    const [uploaded, setUploaded] = useState();
    const [selectedFile, setSelectedFile] = useState(null);
    const filePicker = useRef(null);
    const hostRrl = "/upload";

    function handleChange(event) {
        console.log('upload file work ');
        let target = event.target || event.srcElement || event.currentTarget;
        console.log(target.files);
        setSelectedFile(target.files[0]);

    }

    const handelUpload = async () => {
        if (!selectedFile) {
            alert("please select a file");
            return;
        }
        const formData = new FormData();
        formData.append("file", selectedFile);
        const res = await fetch("http://localhost:5000/upload", {
            method: "POST",
            headers: {
                'Content-Type': "multipart/form-data",
                'Accept': 'application/json'
            },
            body: formData,
        });
        const data = await  JSON.stringify(res);

        setUploaded(data);
        console.log(data)





    }


    const handlePick = () => {
        filePicker.current.click();
    }

    return (
        <>

            <Container>

                <BoxUpload>
                    {selectedFile && (

                        <Ul>
                            <Li>Name:{selectedFile.name}</Li>
                            <Li>Type:{selectedFile.type}</Li>
                            <Li>Size:{selectedFile.size}</Li>
                            <Li>lastModifiedDate:{""}
                                {selectedFile.lastModifiedDate.toLocaleDateString()}
                            </Li>
                        </Ul>
                    )}
                    {uploaded && (
                        <h2>{uploaded.fileName}</h2>,
                            <Image src={`/${uploaded.filePath}`}/>
                    )}
                </BoxUpload>
                <Wrapper>
                    <Title>Send Files in Server </Title>
                    <Form onSubmit={(e) => e.preventDefault()}>

                        <ButtonUpload className="hidden" id="upload" type="file" onChange={handleChange}
                                      ref={filePicker}
                             accept={"image/*,.png,.jpg,.gif,.web"}
                        />
                        <Button onClick={handlePick}>Pick File</Button>
                        <Button onClick={handelUpload} className={"button"}>Submit</Button>


                    </Form>

                </Wrapper>
            </Container>


        </>
    );
};

export default UploadFile;