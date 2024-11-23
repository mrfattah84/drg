import './App.css';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

function input() {
  let data = {
    SSN: '',
    firstName: '',
    lastName: '',
    gender: 0,
    weight: NaN,
    age: NaN,
    stay: NaN,
    hospitalGrade: 0,
    ICD: [],
  };

  return { data };
}

function App() {
  const [data, setData] = useState(input().data);

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleGenderChange = (value) => {
    setData({ ...data, ['gender']: value });
  };

  const handleGradeChange = (value) => {
    setData({ ...data, ['hospitalGrade']: value });
  };

  const handleICDChange = (e) => {
    let icd = [...data.ICD];
    icd[e.target.name] = e.target.value;
    setData({ ...data, ['ICD']: icd });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(data);

  return (
    <div dir="rtl" className="flex flex-col justify-start items-end">
      <h1 className="">DRG</h1>
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between gap-3">
          <label className=" whitespace-nowrap">کد ملی:</label>
          <Input
            dir="ltr"
            className="max-w-[20vw]"
            type="text"
            value={data.SSN}
            name="SSN"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <label className=" whitespace-nowrap">جنسیت:</label>
          <Select
            name="gender"
            onValueChange={(value) => handleGenderChange(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">مرد</SelectItem>
              <SelectItem value="1">زن</SelectItem>
              <SelectItem value="2">نامشخص</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between gap-3">
          <label className=" whitespace-nowrap">نام:</label>
          <Input
            className="max-w-[20vw]"
            type="text"
            value={data.firstName}
            name="firstName"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <label className=" whitespace-nowrap">نام خانوادگی:</label>
          <Input
            className="max-w-[20vw]"
            type="text"
            value={data.lastName}
            name="lastName"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <label className=" whitespace-nowrap">سن:</label>
          <Input
            dir="ltr"
            className="max-w-[20vw]"
            type="text"
            value={data.age || ''}
            name="age"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <label className=" whitespace-nowrap">وزن:</label>
          <Input
            dir="ltr"
            className="max-w-[20vw]"
            type="text"
            value={data.weight || ''}
            name="weight"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <label className=" whitespace-nowrap">مدت بستری:</label>
          <Input
            dir="ltr"
            className="max-w-[20vw]"
            type="text"
            value={data.stay || ''}
            name="stay"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <label className=" whitespace-nowrap">نوع بیمارستان:</label>
          <Select
            name="grade"
            onValueChange={(value) => handleGradeChange(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">درجه 1</SelectItem>
              <SelectItem value="2">درجه 2</SelectItem>
              <SelectItem value="3">درجه 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div
          className="flex items-center justify-between gap-3 col-span-2"
          dir="ltr"
        >
          <label className=" whitespace-nowrap">ICD:</label>
          <Input
            className="max-w-[20vw]"
            type="text"
            value={data.ICD[0] || ''}
            name="0"
            onChange={(e) => handleICDChange(e)}
          />
          <Input
            className="max-w-[20vw]"
            type="text"
            value={data.ICD[1] || ''}
            name="1"
            onChange={(e) => handleICDChange(e)}
          />
          <Input
            className="max-w-[20vw]"
            type="text"
            value={data.ICD[2] || ''}
            name="2"
            onChange={(e) => handleICDChange(e)}
          />
          <Input
            className="max-w-[20vw]"
            type="text"
            value={data.ICD[3] || ''}
            name="3"
            onChange={(e) => handleICDChange(e)}
          />
          <Input
            className="max-w-[20vw]"
            type="text"
            value={data.ICD[4] || ''}
            name="4"
            onChange={(e) => handleICDChange(e)}
          />
          <Input
            className="max-w-[20vw]"
            type="text"
            value={data.ICD[5] || ''}
            name="5"
            onChange={(e) => handleICDChange(e)}
          />
          <Input
            className="max-w-[20vw]"
            type="text"
            value={data.ICD[6] || ''}
            name="6"
            onChange={(e) => handleICDChange(e)}
          />
          <Input
            className="max-w-[20vw]"
            type="text"
            value={data.ICD[7] || ''}
            name="7"
            onChange={(e) => handleICDChange(e)}
          />
          <Input
            className="max-w-[20vw]"
            type="text"
            value={data.ICD[8] || ''}
            name="8"
            onChange={(e) => handleICDChange(e)}
          />
          <Input
            className="max-w-[20vw]"
            type="text"
            value={data.ICD[9] || ''}
            name="9"
            onChange={(e) => handleICDChange(e)}
          />
        </div>
        <Button variant="outline" className="max-w-sm">
          ثبت
        </Button>
      </form>
    </div>
  );
}

export default App;
