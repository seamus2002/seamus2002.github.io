import Project from "../Project/Project";
import hetionet from "../../assets/hetionet.jpeg";
import ml_cancer_diagnosis from "../../assets/ml_cancer_diagnosis.png";

const DataScienceProjectsContainer = () => {
  return (
    <>
      <Project
        name="Cancer Diagnosis using Machine Learning"
        desc="
        This project focuses on leveraging machine learning algorithms for the diagnosis of cancer. 
        The primary problem addressed is the accurate classification of cancer cases using a dataset 
        that includes various medical features. Two classification algorithms, Random Forest and 
        Logistic Regression, were selected to build predictive models for cancer diagnosis. 
        The dataset underwent preprocessing steps, including the conversion of the target variable 
        to numeric form and the assembly of feature vectors. The models were trained on a portion of 
        the dataset, and their performance was evaluated on a separate test set. Results indicate 
        that both Random Forest and Logistic Regression achieved promising results in terms of 
        AUC, F1 Score, Precision, and Recall."
        icon={ml_cancer_diagnosis}
        sourceLink="https://github.com/seamus2002/cancer-diagnosis-using-ml/"
      />
      <Project
        name="HetioNet"
        desc="HetioNet is a data engineering colaboration that contains comprehensive database systems for modeling 
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
