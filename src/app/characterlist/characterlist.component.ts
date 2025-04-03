import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // ✅ Add this

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // ✅ Add HttpClientModule here
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  characters: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('Fetching characters...');

    this.http.get<any[]>('https://hp-api.onrender.com/api/characters')
      .subscribe((data) => {
        console.log('Data received:', data);
        this.characters = data;
      });
  }
}
