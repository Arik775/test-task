import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-task';
  array1: string[] = ['Не женат / не замужем','Женат / замужем']
  array2: string[] = ['Не важно','Астрахань','Волгоград','Волжский',
                      'Ростов-на-Дону','Саратов','Элиста']
  array3: string[] = ['Общение','Иностранные языки','Бег с препятствиями',
                      'Быстрое чтение','Самозащита','Вождение','Программирование',
                      'Управление вертолетом','Оперное пение']
}

