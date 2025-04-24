import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  saveValue: string[] = [];
send(value: string, inputElement: HTMLInputElement) {
  if (value.trim()) {
    this.saveValue.push(value);
 
    console.log("save", this.saveValue);
    console.log('Input Value:', value);
    inputElement.value = ''; 
  } else {
    console.warn('Input is empty');
  }

}
reset(inputElement: HTMLInputElement) {
  inputElement.value = ''; 
  console.log('Input cleared');
}
speakText(text: string) {
  const synth = window.speechSynthesis;
  if (synth.speaking) {
    synth.cancel(); 
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US'; 
  synth.speak(utterance);
}
saveValueRes: string[] = [];
constructor(private messageService: ServiceService) { }
data:any;
date:any = new Date();
ngOnInit(){
 
  this.messageService.getData().subscribe((res:any) =>{
    this.data = res;
    console.log("res", res);

    
  })
 
setInterval(() => {
  this.date = new Date();
}, 1000); 
  
  
}


}
