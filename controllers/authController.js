const bcrypt = require('bcryptjs');
const supabase = require('../config/supabaseClient');

exports.register = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const { error } = await supabase.auth.signUp({ email, password: hashedPassword });

    if (error) return res.render('register', { error: error.message });
    
    res.redirect('/login');
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) return res.render('login', { error: error.message });

    req.session.user = data.user;
    res.redirect('/dashboard');
};
