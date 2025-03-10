const supabase = require('../config/supabaseClient');

exports.addTransaction = async (userId, type, amount, category) => {
    return await supabase.from('transactions').insert([{ user_id: userId, type, amount, category }]);
};

exports.getTransactions = async (userId) => {
    return await supabase.from('transactions').select('*').eq('user_id', userId);
};
