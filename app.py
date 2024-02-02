from flask import Flask, render_template, request, jsonify,flash,redirect,url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'  # 使用 SQLite 数据库
app.secret_key  = "hello"
db = SQLAlchemy(app)

class Record(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userName = db.Column(db.String(50))
    userBirthday = db.Column(db.String(20))
    firstConsultation = db.Column(db.Boolean)
    followUpConsultation = db.Column(db.Boolean)
    healthInsurance = db.Column(db.Boolean)
    honorInsurance = db.Column(db.Boolean)
    blessingInsurance = db.Column(db.Boolean)
    disabilityInsurance = db.Column(db.Boolean)
    registrationFee = db.Column(db.String(10))
    partialBurden = db.Column(db.String(10))
    additionalPartialBurden = db.Column(db.String(10))
    selfPaymentAmount = db.Column(db.String(10))
    eyeDepartment = db.Column(db.Boolean)
    dermatologyDepartment = db.Column(db.Boolean)
    totalFee = db.Column(db.String(10))

@app.route('/')
def index():
    records = Record.query.all()
    return render_template('index.html',records=records)
@app.route('/save_record', methods=['POST'])
def save_record():
    data = request.json  # 获取前端发送的 JSON 数据

    # 创建 Record 实例并设置属性
    record = Record(
        userName=data['userName'],
        userBirthday=data['userBirthday'],
        firstConsultation=data['firstConsultation'],
        followUpConsultation=data['followUpConsultation'],
        healthInsurance=data['healthInsurance'],
        honorInsurance=data['honorInsurance'],
        blessingInsurance=data['blessingInsurance'],
        disabilityInsurance=data['disabilityInsurance'],
        registrationFee=data['registrationFee'],
        partialBurden=data['partialBurden'],
        additionalPartialBurden=data['additionalPartialBurden'],
        selfPaymentAmount=data['selfPaymentAmount'],
        eyeDepartment=data['eyeDepartment'],
        dermatologyDepartment=data['dermatologyDepartment'],
        totalFee=data['totalFee']
    )

    # 将数据添加到数据库并提交更改
    db.session.add(record)
    db.session.commit()

    return jsonify({'status': 'success'})
@app.route('/save')
def save():
    records = Record.query.all()
    return render_template('save.html', records=records)
@app.route('/delete_record/<int:record_id>', methods=['POST'])
def delete_record(record_id):
    record = Record.query.get(record_id)

    if record:
        # 刪除資料庫中的記錄
        db.session.delete(record)
        db.session.commit()

        return jsonify({'status': 'success'})    
@app.route('/get_latest_id')
def get_latest_id():
    latest_record = db.session.query(Record).order_by(Record.id.desc()).first()
    latest_id = latest_record.id if latest_record else 0  # 如果 latest_record 为 None，设置一个默认值，例如 1
    latest_id+=1
    return jsonify({'latest_id': latest_id})
@app.route('/delete_all_records', methods=['POST'])
def delete_all_records():
    try:
        # 刪除所有數據
        db.session.query(Record).delete()
        db.session.commit()
        return jsonify({'status': 'success', 'message': '所有數據刪除成功'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})
if __name__ == '__main__':
    with app.app_context():
        db.create_all()

    app.run(debug = True)
