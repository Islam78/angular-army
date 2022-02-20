import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserNameValidator } from './async.validator';
import { customValidatorFun } from './form.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  profileForm: FormGroup

  loginForm: FormGroup

  schoolForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.initForm()
    this.initLoginForm()
    this.schoolForm = this.createFormItem('init')
  }
  ngOnInit(): void {
  }

  initForm() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: '',
      customValidator: ['', [Validators.required, customValidatorFun(/[0-9]/g)]],
      adrees: this.fb.group({
        city: '',
        street: '',
      }),
    })
  }
  onSubmit() {
    console.log(this.profileForm.value);
  }
  updateValue() {
    // this.profileForm.setValue({ // must set value for all objects 
    //   firstName: 'islam',
    //   lastName: 'mo',
    //   adrees: ({
    //     city: '123',
    //     street: '234',
    //   }),
    // })
    this.profileForm.patchValue({ // set value for selected objects 
      firstName: 'islam',
      adrees: ({
        street: '234',
      }),
    })
  }
  initLoginForm() {
    this.loginForm = this.fb.group({
      UserName: ['', [Validators.required], [UserNameValidator()]],
      Email: [''],
      Password: ['']
    })
  }
  onSubmitLoginForm() {
    // console.log(this.loginForm);
  }
  // *** to make it click >>>>>>>>>>>> ctrl + alt + d + d
  /**
   *
   *
   * @param {string} itemType for make dynamic form  it can be init claass room | subject
   * @memberof ReactiveFormComponent
   */ /*========== Get Class Rooms ==========*/
  getClassRooms(): FormArray {
    return this.schoolForm.get('classRooms') as FormArray;
  }
  /*========== Add Class Rooms ==========*/
  addClassRoom() {
    this.getClassRooms().push(this.createFormItem('classRoom'));
  }
  /*========== Delete Class Rooms ==========*/
  deleteClassRoom(classRoomIndex: number) {
    this.getClassRooms().removeAt(classRoomIndex);
  }
  /*======== Get Class Room Subjects ========*/
  getClassRoomSubjects(classRoomIndex: number): FormArray {
    return this.getClassRooms()
      .at(classRoomIndex)
      .get('subjects') as FormArray;
  }
  /*======== Add Class Room Subjects ========*/
  addClassRoomSubjects(classRoomIndex: number) {
    this.getClassRoomSubjects(classRoomIndex).push(
      this.createFormItem('subject')
    );
  }
  /*===== Delete Class Room Subjects =====*/
  deleteClassRoomSubjects(classRoomIndex: number, subjectIndex: number) {
    this.getClassRoomSubjects(classRoomIndex).removeAt(subjectIndex);
  }
  /**
   * @param itemType for making a dynamic form : it can be init | classRoom | subject
   * @returns FormGroup
   */
  createFormItem(itemType: string): FormGroup {
    let formItem = this.fb.group({});
    switch (itemType) {
      case 'init':
        formItem = this.fb.group({
          schoolName: '',
          totalStudentsCount: '',
          classRooms: this.fb.array([])
        });
        break;
      case 'classRoom':
        formItem = this.fb.group({
          studentsCount: '',
          classRoomNumber: '',
          subjects: this.fb.array([])
        });
        break;
      case 'subject':
        formItem = this.fb.group({
          subjectName: '',
          studentsCount: ''
        });
        break;
    }
    return formItem;
  }



}
