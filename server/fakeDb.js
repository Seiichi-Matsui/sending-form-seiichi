const Contact = require('./model/contact')

class FakeDb {

    constructor() {
        this.contacts = [
            {
                lastName: '松井',
                firstName: '成一',
                lastNamePseudonym: 'マツイ',
                firstNamePseudonym: 'セイイチ',
                postCode: '175-0094',
                address: '東京都板橋区成増4-4-25',
                buildingName: 'スターリングヒルズS12',
                phoneNumber: '09060459574',
                phoneType: '携帯電話',
                emailFirst: 'seibu283',
                emailLast: 'yahoo.co.jp',
                desiredContact: 'メール',
                status: '未対応',
                priority: '未設定',
                manager: '未設定',
                contactForm: '153系を基本に出力増強・勾配線区対応を行った直流急行形電車として、1963年から1970年にかけて701両が製造された。当初は平坦線出力増強形として163系の製造が計画されたが、系列集約を推進する見地から本格的な増備は見送られたため、標準型として165系が多くの路線で運用された。急行列車が1980年代より減少し1990年代後半には消滅、国鉄末期から余剰車両活用を目的に一部車両にジョイフルトレイン改造が施工されたほか、新潟・長野・松本・甲府地区・飯田線豊橋口・関西本線名古屋口・和歌山地区などでは、普通列車運用に充当され夏期冷房化率向上に貢献した。しかし老朽化に加えデッキ付き2扉構造により乗降時間を要すことから列車遅延の原因となるなど使い勝手が悪く、より収容力の大きい近郊形・通勤形に置換えられた。',
                date: '2022.9.5 12:52'
            },
            {
                lastName: '平野',
                firstName: '紗帆',
                lastNamePseudonym: 'ヒラノ',
                firstNamePseudonym: 'サホ',
                postCode: '175-0094',
                address: '東京都板橋区成増4-4-25',
                buildingName: 'スターリングヒルズS12',
                phoneNumber: '09060459574',
                phoneType: '携帯電話',
                emailFirst: 'seibu283',
                emailLast: 'yahoo.co.jp',
                desiredContact: 'メール',
                status: '未対応',
                priority: '未設定',
                manager: '未設定',
                contactForm: '153系を基本に出力増強・勾配線区対応を行った直流急行形電車として、1963年から1970年にかけて701両が製造された。当初は平坦線出力増強形として163系の製造が計画されたが、系列集約を推進する見地から本格的な増備は見送られたため、標準型として165系が多くの路線で運用された。急行列車が1980年代より減少し1990年代後半には消滅、国鉄末期から余剰車両活用を目的に一部車両にジョイフルトレイン改造が施工されたほか、新潟・長野・松本・甲府地区・飯田線豊橋口・関西本線名古屋口・和歌山地区などでは、普通列車運用に充当され夏期冷房化率向上に貢献した。しかし老朽化に加えデッキ付き2扉構造により乗降時間を要すことから列車遅延の原因となるなど使い勝手が悪く、より収容力の大きい近郊形・通勤形に置換えられた。',
                date: '2022.9.10 12:52'
            }
        ]
    }

    async initDb() {
        await this.cleanDb()
        this.pushContactToDb()
    }

    async cleanDb() {
        await Contact.deleteMany({})
    }

    pushContactToDb() {
        this.contacts.forEach(
            (contacts) => {
                const newContact = new Contact(contacts)
                newContact.save()
            }
        )
    }
}

module.exports = FakeDb