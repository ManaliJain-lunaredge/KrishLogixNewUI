const DomainName="krishlogix.lunar-edge.com"
const localDomainName="http://localhost:5000"

const isLocal=window.location.hostname==="localhost";

const currentDomainName=isLocal? localDomainName:DomainName;


export const API={
    contactQuery:{
        url:`${currentDomainName}/api/contact`,
        method:"POST"
    }
}