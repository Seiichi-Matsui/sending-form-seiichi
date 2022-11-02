const express = require('express')
const router = express.Router()
const Contact = require('../model/contact')

router.get('', function(req, res) {
    Contact.find({}, function(err, foundContact) {
        res.json(foundContact)
    })
})

router.post('/add', function(req, res) {
    const { lastName, firstName, lastNamePseudonym, firstNamePseudonym, postCode, address, buildingName, phoneNumber, phoneType, emailFirst, emailLast, desiredContact, status, priority, manager, contactForm, date, opened } = req.body

    if(!lastName) {
        return res.status(422).send({errors: [{title: 'name1', detail: "お名前を入力してください。"}]})
    }

    if(!firstName) {
        return res.status(422).send({errors: [{title: 'name1', detail: "お名前を入力してください。"}]})
    }

    if(!firstNamePseudonym) {
        return res.status(422).send({errors: [{title: 'name2', detail: "お名前のふりがなを入力してください。"}]})
    }

    if(!lastNamePseudonym) {
        return res.status(422).send({errors: [{title: 'name2', detail: "お名前のふりがなを入力してください。"}]})
    }

    if(!postCode) {
        return res.status(422).send({errors: [{title: 'postCode', detail: "郵便番号を入力してください。"}]})
    }

    if(!address) {
        return res.status(422).send({errors: [{title: 'adress', detail: "住所を入力してください。"}]})
    }

    if(!phoneNumber) {
        return res.status(422).send({errors: [{title: 'phoneNumber', detail: "電話番号を入力してください。"}]})
    }

    if(!phoneType) {
        return res.status(422).send({errors: [{title: 'phoneType', detail: "お電話の種類を選択してください。"}]})
    }

    if(!emailFirst) {
        return res.status(422).send({errors: [{title: 'email', detail: "メールアドレスを入力してください。"}]})
    }

    if(!emailLast) {
        return res.status(422).send({errors: [{title: 'email', detail: "メールアドレスを入力してください。"}]})
    }

    if(!desiredContact) {
        return res.status(422).send({errors: [{title: 'desiredContact', detail: "ご希望の連絡方法を選択してください。"}]})
    }

    if(!contactForm) {
        return res.status(422).send({errors: [{title: 'contactForm', detail: "お問合せ内容を入力してください。"}]})
    }

    const contact = new Contact({lastName, firstName, lastNamePseudonym, firstNamePseudonym, postCode, address, buildingName, phoneNumber, phoneType, emailFirst, emailLast, desiredContact, status, priority, manager, contactForm, date, opened })
        contact.save(function(err) {
            if(err) {
                return res.status(422).send({errors: [{title: 'User error', detail: "エラーが発生しました。お手数ですが再度ご入力をお願いします。"}]})
            }
            return res.json({"registed": true})
        })
})

module.exports = router