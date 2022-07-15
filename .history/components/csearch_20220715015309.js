import { useRouter } from "next/router";
import { useState } from "react";
// import searchStyles from "../styles/searchbar.module.css";
import { Col, Row, Form, Button, Accordion } from 'react-bootstrap';
import consumerStyles from "../styles/consumer.module.css";
const SearchBar = ({comp,setCompany,setCId}) => {
  const [companyToSearch, setCompanySearch] = useState("");
  const changedSearch = (event) => {
    setCompanySearch(event.target.value);
    setCompany(event.target.value);
    const temp = comp.filter((item) => {
        return event.target.value.toLowerCase() == item.Name.toLowerCase();
      });
      if (temp.length>=1 && temp[0].mailId) {
        setCId(temp[0].mailId);
      } else {
        setCId("Does not Exist");
    }
    
  };
  
  const onSearch = (searchTerm, searchId) => {
    setCompanySearch(searchTerm);
    setCompany(searchTerm);
    console.log(searchId);
    setCId(searchId);
  };
  return (
    <div style={{position:"relative"}}>
      <Form.Group className={consumerStyles.det}>
      {/* <Form.Label className={consumerStyles.nam}>Name</Form.Label> */}
      <Form.Control className={consumerStyles.plc} type="text" placeholder="company name"  value={companyToSearch}
          onChange={changedSearch}/>
      </Form.Group>
      
        <div className={consumerStyles.sheet}>
          {comp.filter((item,key) => {
              const searchTerm = companyToSearch.toLowerCase();
              const fullName = item.Name.toLowerCase();
              if(key!=0){
              return (
                searchTerm.length && (fullName.startsWith(searchTerm) ||fullName.includes(searchTerm))
                )
              }
            })
            .map((item) => (
              <div
                onClick={() => onSearch(item.Name, item.mailId)}
                style={{cursor:"pointer"}}
                key={item.Name}
              >
                {item.Name}
              </div>
            ))}
        
      </div>
    </div>
  );
};

export default SearchBar;
