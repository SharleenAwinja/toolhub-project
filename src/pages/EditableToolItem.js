import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../components/RecordForm.css';

function EditableToolItem (props) {

const location = useLocation();
const {tool} = location.state;

// console.log(tool);
// console.log(tool.toolname);

const [toolName, setToolName] = useState(tool.toolname);
const [description, setDescription] = useState(tool.description);
const [url, setUrl] = useState(tool.url);
const [repository, setRepository] = useState(tool.repository);
const [details, setDetails] = useState(tool.details);
const [author, setAuthor] = useState(tool.author);
// const [tooldetails, setToolDetails] = useState({});

// console.log(toolName);

const toolNameHandler = (event) => {
    setToolName(event.target.value);
};

const descriptionHandler = (event) => {
    setDescription(event.target.value);
};

const urlHandler = (event) => {
    setUrl(event.target.value);
};

const repositoryHandler = (event) => {
    setRepository(event.target.value);
};
const detailsHandler = (event) => {
    setDetails(event.target.value);
};

const authorHandler = (event) => {
    setAuthor(event.target.value);
};

const submitHandler = (event) => {
    event.preventDefault();

    const toolData = {
        id: tool.id,
        toolname: toolName,
        description: description,
        url: url,
        repository: repository,
        details: details,
        author: author,
        slug: toolName
    };

props.onSaveToolData(toolData);    

//  setToolDetails(toolData);   

// console.log(tooldetails);


    setToolName('');
    setDescription('');
    setUrl('');
    setRepository('');
    setDetails('');
    setAuthor('');

 
}


  return (
    <div className='new-record'>
        <div className="record">
            <form onSubmit={submitHandler}>
                <div className='input-label'>Toolname: </div>
                <input type="text" placeholder='enter tool name' id='title' value={toolName} onChange={toolNameHandler} required/>
                <div className='input-label'>Brief Description: </div>
                <input type="text" placeholder='enter tool description' id='description' value={description} onChange={descriptionHandler} required/>
                <div className='input-label'>URL: </div>
                <input type="url" placeholder='enter url to tool docs' id='url' value={url} onChange={urlHandler} required/>
                <div className='input-label'>Repository: </div>
                <input type="url" placeholder='enter url to tool repository' id='repository' value={repository} onChange={repositoryHandler} required/>
                <div className='input-label'>Details: </div>
                <input type="text" placeholder='enter detailed explanation of the tool' id='details' value={details} onChange={detailsHandler} />
                <div className='input-label'>Author: </div>
                <input type="text" placeholder='enter your username' id='author' value={author} onChange={authorHandler} required/>
                <div className="submit-btn">
                    <button className="btn" type='submit' >Save record</button>
                </div>
                
            </form>
        </div>
      </div>
  )
}

export default EditableToolItem;
