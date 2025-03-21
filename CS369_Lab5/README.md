[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/mYrEvio1)
# cs369-exercise-5-javascript-dom

# Lab วิชา CS369 ครั้งที่ 5

## ส่วนที่ 2 JS FORM
### หลักการการ Validate Form มีดังนี้
1. ในทุกช่องจะต้องมีการกรอกข้อมูลลงภายในช่องดังกล่าวจึงจะสามารถกด submit ได้ โดยในทุกๆ element จะใส่ `required` ตามหลังในทุกแท็กของ `<input>`
2. ในส่วนของการกรอกบัตรประชาชน ในช่อง `id` ของ `id-card` จะมีการตรวจสอบว่า `value` นั้นมีขนาดความยาว 13 หรือไม่ หากไม่จะ `alert` เพื่อใส่ให้ครบทั้ง 13 ตัว
3. ในส่วนของการกรอกหมายเลขโทรศัพท์ ในช่อง `id` ของ `telephone` จะมีการตรวจสอบว่า `value` นั้นมีขนาดความยาว 10 หรือไม่ หากไม่ จะ `alert` เพื่อใส่ให้ครบทั้ง 10 ตัว
4. ในส่วนของการกรอกคะแนนเฉลี่ยสะสม ในช่อง `id` ของ `gpa` จะมีการตรวจสอบว่า `value` นั้นมีค่าอยู่ในช่วง 0 - 4.00 หรือไม่ หากไม่ จะ `alert` เพื่อใส่ช่วงให้ถูกต้อง
5. ในส่วนของประเภทการสอบ และคะแนนสอบ ในช่อง `id` ของ `test-type` และ `test-score` จะตรวจสอบว่าค่านั้นถูกต้องตามประเภทของการสอบไหม เช่น TU-get จะต้องอยู่ในช่วง 0 - 120 เท่านั้น ถ้าไม่จะ `alert` ตรวจสอบประเภทของการสอบ และคะแนนสอบให้ถูกต้อง

## ส่วนที่ 3 ร้านขายเครื่องดื่ม บร.2
### หลักการออกแบบมีดังนี้

#### 1. การจัดวางที่เป็นลำดับ (Visual Hierarchy)
- หัวข้อร้านอยู่ด้านบนสุดเพื่อแสดงตัวตนของร้าน
- แถบค้นหาอยู่ถัดลงมาเพื่อให้ผู้ใช้สามารถค้นหาเครื่องดื่มได้ทันที
- แบ่งส่วนเมนูเป็น 2 ส่วนชัดเจน: เมนูยอดฮิตและเมนูทั้งหมด

#### 2. การใช้สีที่สอดคล้องกัน (Color Consistency)
- ใช้โทนสีน้ำตาล (#8B4513) เป็นหลักสื่อถึงร้านเครื่องดื่ม/กาแฟ
- พื้นหลังสีอ่อน (#f5f1eb) ช่วยให้อ่านง่าย สบายตา
- ใช้สีเพื่อแสดงสถานะ เช่น ปุ่มที่ถูกเลือกจะเปลี่ยนสี

#### 3. การจัดการพื้นที่ (Space Management)
- ใช้ Grid Layout จัดเรียงเมนูให้เป็นระเบียบ
- มีการเว้นระยะห่างที่เหมาะสมระหว่างรายการ

#### 4. Responsive Design
- รองรับการแสดงผลในทุกขนาดหน้าจอ
- ปรับจำนวนคอลัมน์ตามขนาดหน้าจอ

#### 5. การให้ Feedback แก่ผู้ใช้
- แจ้งเตือนเมื่อผู้ใช้ไม่ได้เลือกตัวเลือกที่จำเป็น
- แสดงจำนวนสินค้าในตะกร้าที่ปุ่มตะกร้า

#### 6. ความง่ายในการใช้งาน (Usability)
- ปุ่มตะกร้าลอยอยู่มุมขวาล่างเข้าถึงได้ง่าย
- มีระบบค้นหาเครื่องดื่มแบบ Real-time
- แสดงราคาและรายละเอียดชัดเจน

#### 7. การแสดงสถานะ (Status Visibility)
- มี Hover effect เมื่อชี้ที่เมนู
- แสดงสถานะปุ่มที่ถูกเลือก

#### 8. การจัดการ Modal
- มีพื้นหลังทึบเมื่อแสดง Modal เพื่อเน้นส่วนที่สำคัญ

#### 9. Typography
- ใช้ฟอนต์ Kanit ที่อ่านง่ายสำหรับภาษาไทย
- ขนาดตัวอักษรที่เหมาะสมกับการอ่าน

#### 10. การลดความผิดพลาด (Error Prevention)
- มีการตรวจสอบการเลือกตัวเลือกก่อนเพิ่มลงตะกร้า
- สามารถยกเลิกการทำรายการได้ตลอดเวลา

---

## สมาชิกในทีมกลุ่มที่ 9

| เลขทะเบียนนักศึกษา | ชื่อ - สกุล | ชื่อเล่น | ตำแหน่ง | การมีส่วนร่วม |
|------------------|------------|--------|---------|-----------|
| 6509540057 | คมชาญ กาญจนเกษตรกุล | ไบร์ท | สมาชิก | 19% |
| 6509611619 | ชญานนท์ กล่อมใจขาว | โอ๊ต | สมาชิก | 19% |
| 6509681117 | จิตดนัย แสน้อย | ต้า | หัวหน้าทีม | 24% |
| 6509681125 | ธนพล มูลจาติ | ต้นกล้า | สมาชิก | 19% |
| 6509681174 | ปรีวีวุฒิ ประสิทธิ์ชัยพล | อับดุล | สมาชิก | 19% |

