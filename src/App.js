import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Index.css';
import Navbar from './components/Navbar';
import Leaderboard from './pages/Leaderboard';
import Home from './pages/Home';
import Records from './pages/Records';
import ErrorPage from './pages/ErrorPage';
import ToolItem from './pages/ToolItem';
import NewRecord from './pages/NewRecord';
import { useState } from 'react';
import Editable from './pages/Editable';

export const dataInfo = [


    {
        id: Math.floor(Math.random() * 100 ),
        toolname: "Pywikibot",
        description: "Python library and collection of scripts that automate work on MediaWiki sites",
        url: "https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Pywikibot",
        repository: "https://gerrit.wikimedia.org/g/pywikibot/core",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et velit sed mauris tincidunt elementum sed eu metus. Integer aliquam sollicitudin nisl, vel molestie mi pharetra quis. Suspendisse nec ligula et justo semper porttitor vitae in ex. Proin tristique scelerisque est lobortis tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tristique diam ut quam scelerisque, ultricies luctus lacus commodo. Aenean facilisis pharetra eros, in efficitur libero iaculis in. Quisque aliquam quam elit, sit amet luctus lorem porttitor vitae. Aenean ac sem id sem vehicula semper at et nisl. Curabitur ac semper velit, id convallis sapien. Nam sagittis risus et libero condimentum, ac eleifend eros vulputate. Phasellus vitae velit vitae risus commodo mollis. Etiam volutpat elit ac mi euismod, id finibus enim rutrum.",
        author: 'Jane',
        slug: "Pywikibot",
        edits: '2',
        date: "2022-10-10"
    },

    {
        id: Math.floor(Math.random() * 100 ),
        toolname: "Wikidata Todo",
        description: "Shows you little things you can do on Wikidata.",
        url: "https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Pywikibot",
        repository: "https://gerrit.wikimedia.org/g/pywikibot/core",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et velit sed mauris tincidunt elementum sed eu metus. Integer aliquam sollicitudin nisl, vel molestie mi pharetra quis. Suspendisse nec ligula et justo semper porttitor vitae in ex. Proin tristique scelerisque est lobortis tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tristique diam ut quam scelerisque, ultricies luctus lacus commodo. Aenean facilisis pharetra eros, in efficitur libero iaculis in. Quisque aliquam quam elit, sit amet luctus lorem porttitor vitae. Aenean ac sem id sem vehicula semper at et nisl. Curabitur ac semper velit, id convallis sapien. Nam sagittis risus et libero condimentum, ac eleifend eros vulputate. Phasellus vitae velit vitae risus commodo mollis. Etiam volutpat elit ac mi euismod, id finibus enim rutrum.",
        author: 'Mark',
        slug: "Wikidata Todo",
        edits: '13',
        date: "2022-10-8"
    },

    {
        id: Math.floor(Math.random() * 100 ),
        toolname: "The Wikidata Game",
        description: "A set of games to quickly add statements to Wikidata.",
        url: "https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Pywikibot",
        repository: "https://gerrit.wikimedia.org/g/pywikibot/core",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et velit sed mauris tincidunt elementum sed eu metus. Integer aliquam sollicitudin nisl, vel molestie mi pharetra quis. Suspendisse nec ligula et justo semper porttitor vitae in ex. Proin tristique scelerisque est lobortis tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tristique diam ut quam scelerisque, ultricies luctus lacus commodo. Aenean facilisis pharetra eros, in efficitur libero iaculis in. Quisque aliquam quam elit, sit amet luctus lorem porttitor vitae. Aenean ac sem id sem vehicula semper at et nisl. Curabitur ac semper velit, id convallis sapien. Nam sagittis risus et libero condimentum, ac eleifend eros vulputate. Phasellus vitae velit vitae risus commodo mollis. Etiam volutpat elit ac mi euismod, id finibus enim rutrum.",
        author: 'Rose',
        slug: "The Wikidata Game",
        edits: '27',
        date: "2022-10-17"
    },

    {
        id: Math.floor(Math.random() * 100 ),
        toolname: "Ranker",
        description: "tool to edit the rank of multiple Wikidata statements at once",
        url: "https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Pywikibot",
        repository: "https://gerrit.wikimedia.org/g/pywikibot/core",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et velit sed mauris tincidunt elementum sed eu metus. Integer aliquam sollicitudin nisl, vel molestie mi pharetra quis. Suspendisse nec ligula et justo semper porttitor vitae in ex. Proin tristique scelerisque est lobortis tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tristique diam ut quam scelerisque, ultricies luctus lacus commodo. Aenean facilisis pharetra eros, in efficitur libero iaculis in. Quisque aliquam quam elit, sit amet luctus lorem porttitor vitae. Aenean ac sem id sem vehicula semper at et nisl. Curabitur ac semper velit, id convallis sapien. Nam sagittis risus et libero condimentum, ac eleifend eros vulputate. Phasellus vitae velit vitae risus commodo mollis. Etiam volutpat elit ac mi euismod, id finibus enim rutrum.",
        author: 'Anthony',
        slug: "Ranker",
        edits: '17',
        date: "2022-10-23"
    },

    {
        id: Math.floor(Math.random() * 100 ),
        toolname: "Duplicity",
        description: "Find Wikipedia articles without associated Wikidata items, and match or create a new item.",
        url: "https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Pywikibot",
        repository: "https://gerrit.wikimedia.org/g/pywikibot/core",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et velit sed mauris tincidunt elementum sed eu metus. Integer aliquam sollicitudin nisl, vel molestie mi pharetra quis. Suspendisse nec ligula et justo semper porttitor vitae in ex. Proin tristique scelerisque est lobortis tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tristique diam ut quam scelerisque, ultricies luctus lacus commodo. Aenean facilisis pharetra eros, in efficitur libero iaculis in. Quisque aliquam quam elit, sit amet luctus lorem porttitor vitae. Aenean ac sem id sem vehicula semper at et nisl. Curabitur ac semper velit, id convallis sapien. Nam sagittis risus et libero condimentum, ac eleifend eros vulputate. Phasellus vitae velit vitae risus commodo mollis. Etiam volutpat elit ac mi euismod, id finibus enim rutrum.",
        author: 'Lisa',
        slug: "Duplicity",
        edits: '15',
        date: "2022-10-13"
    },

    {
        id: Math.floor(Math.random() * 100 ),
        toolname: "PetScan",
        description: "Replacement for CatScan2, QuickIntersection, Creator, Autolist etc.",
        url: "https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Pywikibot",
        repository: "https://gerrit.wikimedia.org/g/pywikibot/core",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et velit sed mauris tincidunt elementum sed eu metus. Integer aliquam sollicitudin nisl, vel molestie mi pharetra quis. Suspendisse nec ligula et justo semper porttitor vitae in ex. Proin tristique scelerisque est lobortis tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tristique diam ut quam scelerisque, ultricies luctus lacus commodo. Aenean facilisis pharetra eros, in efficitur libero iaculis in. Quisque aliquam quam elit, sit amet luctus lorem porttitor vitae. Aenean ac sem id sem vehicula semper at et nisl. Curabitur ac semper velit, id convallis sapien. Nam sagittis risus et libero condimentum, ac eleifend eros vulputate. Phasellus vitae velit vitae risus commodo mollis. Etiam volutpat elit ac mi euismod, id finibus enim rutrum.",
        author: 'Sam',
        slug: "PetScan",
        edits: '30',
        date: "2022-10-16"
    }

]

function App() {

const [toolsInfo, setToolsInfo] = useState(dataInfo); 
// const [searchResults, setsearchResults] = useState([]);


React.useEffect(() => {

  const temp = localStorage.getItem('toolsinfo');
  const loadedtools = JSON.parse(temp);

  if (loadedtools) {
    setToolsInfo(loadedtools);
    // setsearchResults(loadedtools);
  }
}, []);

React.useEffect(() => {
  const toolJson = JSON.stringify(toolsInfo); 
  localStorage.setItem('toolsinfo', toolJson);
}, [toolsInfo]);

const addToolDataHandler = enteredToolData => {
    setToolsInfo((prevToolsInfo) => {
      return [enteredToolData, ...prevToolsInfo]
    });
} 

const deleteTool = (id) => {
  const updatedTools= [...toolsInfo].filter((oneTool) => oneTool.id !== id);
  setToolsInfo(updatedTools);
}

const editTool = (enteredToolData) => {
  const index = toolsInfo.findIndex((tool) => tool.id === enteredToolData.id);
  toolsInfo[index] = enteredToolData;
  setToolsInfo(toolsInfo);
};
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home toolsInfo={toolsInfo}/>} ></Route>
        <Route path='/records' element={<Records toolsInfo={toolsInfo} deletehandler={deleteTool} onAddToolData={addToolDataHandler}/>} ></Route>
        <Route path='/leaderboard' element={<Leaderboard toolsInfo={toolsInfo} />} ></Route>
        <Route path='*' element={<ErrorPage />}></Route>
        <Route path= '/records/:slug' element={<ToolItem />} />
        <Route path= '/records/new-record' element={<NewRecord onAddToolData={addToolDataHandler}/>}></Route>
        <Route path= '/records/editable-record' element={<Editable editTool={editTool}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
