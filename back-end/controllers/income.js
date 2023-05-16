const IncomeSchema = require('../models/IncomeModel')
exports.addIncome = async (req, res) => {

    const { title, description, amount, date, category } = req.body;
    const Income = IncomeSchema({
        title, description, amount, date, category
    })
    // console.log(Income);
    try {
        if (!title || !category || !amount || !description || !date) {
            return res.status(400).json({
                message: "All Fields are required",
                IsError: 1
            })
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({
                message: "Income Should be Positive or number",
                IsError: 1
            })
        }
        await Income.save();

        return res.status(200).json({
            message: "Income added succesfully",
            status: 1
        })

    } catch (err) {
        return res.status(500).json({
            message: err,
        })
    }

}
exports.getIncomes = async (req, res) => {

    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
        return res.status(200).json(incomes);

    }
    catch (err) {
        return res.status(500).json({
            message: err
        });

    }
}

exports.deleteIncome = async (req, res) => {

    const { id } = req.params;
    IncomeSchema.findByIdAndDelete(id).then((income) => {
        return res.status(200).json({
            message: 'Income Deleted'
        });
    }).catch((error) => {
        return res.status(500).json({
            message: err
        });
    })
}