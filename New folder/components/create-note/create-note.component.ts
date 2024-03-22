import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from '../../Services/Notes/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.scss'
})
export class CreateNoteComponent {

  noteForm!:FormGroup;
  submitted=false;
  display:boolean=true;
  display1:boolean=true;
  constructor(private formBuilder:FormBuilder,private notes:NotesService){}
  ngOnInit(): void {
    this.noteForm=this.formBuilder.group({
      Title: ['',[Validators.required]],
      discription: ['',[Validators.required]]
    })
  }
  Notesubmit(){
    this.submitted=true;
    if(this.noteForm.valid){
      let reqData={
        title: this.noteForm.value.Title,
        description: this.noteForm.value.discription
      }
      console.log(reqData);
      this.notes.addNotes(reqData).subscribe((res:any)=>{
        console.log(res);
      });
    }
    this.display=true;
  }
}
