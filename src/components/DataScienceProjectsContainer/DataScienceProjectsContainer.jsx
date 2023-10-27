import Project from "../Project/Project";
import hetionet from "../../assets/hetionet.jpeg";

const DataScienceProjectsContainer = () => {
  return (
    <>
      <Project
        name="HetioNet"
        desc="HetioNet is a colaboration that contains comprehensive database systems for modeling 
                complex biological relationships. This database is designed to provide quick responses 
                to critical queries related to diseases, genes, drugs, and their interactions. 
                Specifically, given a disease ID, it can provide the name, drugs that can treat or 
                alleviate it, genes associated with causing the disease, and where the disease occurs. 
                Additionally, it can identify compounds that can potentially treat a new disease based on 
                gene regulation patterns and location information. This project includes a Python 
                command-line interface and utilizes both MongoDB and PyMongo, as well as Neo4j and 
                Py2neo to efficiently store and manage complex biological data and relationships."
        icon={hetionet}
        sourceLink="https://github.com/seamus2002/HetioNet"
      />
    </>
  );
};

export default DataScienceProjectsContainer;
