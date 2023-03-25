import React from "react";
import './Organization.css';

function Organization(){
    return(
        <div>
            <h3 className="org">
                SIMILIAR ORGANIZATION
            </h3>
            <div className="org-img">
            <a href="https://moef.gov.in/en/" className="org-a">
            <img src="./orgImages/org1.png" alt="img" />
            </a>
            <a href="https://indiancc.nic.in/" className="org-a">
            <img src="./orgImages/org2.png" alt="img" />
            </a>
            <a href="https://www.indianredcross.org/ircs/index.php" className="org-a">
            <img src="./orgImages/org3.png" alt="img" />
            </a>
            <a href="https://www.hindustanscoutsandguidesassociation.com/" className="org-a">
            <img src="./orgImages/org4.jpg" alt="img" />
            </a>
            </div>
            
        </div>
        
    )
}
export default Organization