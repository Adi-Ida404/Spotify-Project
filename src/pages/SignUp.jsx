
export const SignUp = () => {
  return (
    <div>
        <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}><b>Sign Up</b></h2>
        <form>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="createusername">Create Username:</label>
            <input style={styles.input} type="text" id="createusername" name="username" required />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="createpassword">Create Password:</label>
            <input style={styles.input} type="password" id="createpassword" name="password" required />
          </div>
          <button style={styles.button} type="submit"><b>Create Account</b></button>
        </form>
      </div>
    </div>
    </div>
  )
}
const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#151515',
    },
    formContainer: {
      height:'60vh',
      borderRadius: '10%',
      backgroundColor: 'black',
      padding: '20px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: 'white',
    },
    inputContainer: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: 'white',
    },
    input: {
      backgroundColor: 'grey',
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#1ed65e',
      color: 'black',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px'
    },
  };

