import React, { useContext } from "react";
import { connect } from 'react-redux';
import { addReg } from '../Redux/actions';
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from ".";


const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChangeB }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChangeB(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Reg = () => {
  const { handleChangeB, sendTransaction, formBData, isLoading } = useContext(TransactionContext); 

  const handleSubmitB= (e,props) => {
    const { email, userName, fullName, password, phone } = formBData;

    e.preventDefault();
    
      if ( !email || !userName || !fullName || !password || !phone) return;
      
      props.onAddReg({
        email: formBData.email, 
        userName: formBData.userName,
        fullName: formBData.fullName, 
        password: formBData.password, 
        phone: formBData.phone
     });
      
    
  };
  
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Register to Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            IKCoin Is The Future!
          </p>
          

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Dynamic
            </div>
            <div className={companyCommonStyles}>Metaverse</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Max Secure
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Smart Currencies
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Email" name="email" type="text" handleChangeB={handleChangeB} />
            <Input placeholder="User Name" name="userName" type="text" handleChangeB={handleChangeB} />
            <Input placeholder="Full Name" name="fullName" type="text" handleChangeB={handleChangeB} />
            <Input placeholder="Password" name="password" type="text" handleChangeB={handleChangeB} />
            <Input placeholder="Phone" name="phone" type="text" handleChangeB={handleChangeB} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmitB}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Submit
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
     user: state
 
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddReg: regs => {
       dispatch(addReg(regs));
    },
    onDelete: id => {
       dispatch(deleteExpense(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reg);
//export default Reg;
