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


const Upload = () => {
    const [value, setValue] = useState('');
    const [username, setUsername] = useState("");
    const [imageName, setImageName] = useState("");
    const [dataFile, setDataFile] = useState("");
    const [uploaded, setUploaded] = useState();
    const [selectedFile, setSelectedFile] = useState(null);
    const filePicker = useRef(null);

    function handleChange(event) {
        console.log('upload file work ');
        let target = event.target || event.srcElement || event.currentTarget;
        console.log(target.files);
        setSelectedFile(target.files[0])

    }

    const handelUpload = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            alert("please select a file");
            return;
        }
        const formData = new FormData();
        formData.append("file", selectedFile);
        const result = await fetch({
            method: "POST",
            body: formData,
        });
        const data = await result.json();
        setUploaded(data);

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
                        <Input type={"text"} placeholder={'imageName'} name="image"
                               onChange={(e) => setValue(e.target.value)}/>
                        <Input type={"hidden"} name="imagename" placeholder={""} value={""}
                               onChange={(e) => setImageName(e.target.value)}/>
                        <Input placeholder={'username'} type={"text"} onChange={(e) => setUsername(e.target.value)}
                               name={"username"} value={""}/>


                        <ButtonUpload className="hidden" id="upload" type="file" onChange={handleChange}
                                      ref={filePicker}
                            // accept={"image/*,.png,.jpg,.gif,.web"}
                        />
                        <Button onClick={handlePick}>Pick File</Button>
                        <Button onClick={handelUpload} className={"button"}>Submit</Button>


                    </Form>

                </Wrapper>
            </Container>


        </>
    );
};

export default Upload;