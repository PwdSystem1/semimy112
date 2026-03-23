const connection = require('../config/db');

exports.getAllUsers=(req,res)=>{
    connection.query('SELECT * FROM useraccount', (err,rows, fields)=>{
        if(err) throw err;
        res.json(rows)
    });
};

//create new user
//Crud - Create

exports.createUserAccount=(req,res)=>{
    const {fname, lname, username, password, email, role, idnumber,} = req.body;
    connection.query('INSERT INTO useraccount (first_name, last_name, username, password, email, role, id) VALUES (?,?,?,?,?,?,?)', [fname,lname,username,password,email,role,idnumber], (err,result)=>{
        if(err) throw err;
        res.json({message: 'User created successfully', userId: result.insertId});
    });
};

exports.updateUserAccount = (req, res) => {
    const id = req.params.id; // ✔ gamitin ito

    const { fname, lname, username, password, email, role, idnumber } = req.body;

    connection.query(
        'UPDATE useraccount SET first_name=?, last_name=?, username=?, password=?, email=?, role=?, id=? WHERE id=?',
        [fname, lname, username, password, email, role, idnumber, id],
        (err, result) => {
            if (err) throw err;

            if (result.affectedRows > 0)
                res.json({ message: 'User updated successfully' });
            else
                res.status(404).json({ message: 'User not found' });
        }
    );
};

exports.deleteUserAccount = (req, res) => {
    const id = req.params.id; // ✔ FIXED

    connection.query(
        'DELETE FROM useraccount WHERE id=?',
        [id],
        (err, result) => {
            if (err) throw err;

            if (result.affectedRows > 0)
                res.json({ message: 'User deleted successfully' });
            else
                res.status(404).json({ message: 'User not found' });
        }
    );
};

