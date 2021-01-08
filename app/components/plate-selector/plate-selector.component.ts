import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
const { getDimensions } = require('../../utils/utils.js');

@Component({
  selector: 'app-plate-selector',
  templateUrl: './plate-selector.component.html',
  styleUrls: ['./plate-selector.component.css']
})
// Child Component.
export class PlateSelectorComponent implements OnInit {
  @Input() wells: number;
  columns: number;
  letters: Array<string> = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  selectedColumns: Array<number> = [];
  @Output() selectColumn: EventEmitter<any> = new EventEmitter<any>();

  // I added some more wells because of the indicators (first row numbers and first column letters)
  numbers: Array<number> = [];
  
  ngOnInit() {
    // We can dynamically calculate the number of columns based on the whole number of wells
    this.columns = getDimensions(96)[1];

    this.numbers = Array(this.wells + this.columns + (this.wells / this.columns + 1))
                     .fill().map((item, index) => ++index);
  }

  isFirstRowOrFirstColumn(number: number): boolean {
    let result: boolean =
      (this.isFirstColumn(number) ||
        this.isFirstRow(number)) &&
      !this.isExactlyFirstCell(number);

    return result;
  }

  isLastColumn(number: number): boolean {
    return number % (this.columns + 1) == 1;
  }

  isFirstColumn(number: number): boolean {
    return number % (this.columns + 1) == 1;
  }

  isFirstRow(number: number): boolean {
    return number <= this.columns + 1;
  }

  isExactlyFirstCell(number: number): boolean {
    return number == 1;
  }

  onColumnsChanged(selectedColumns: Array<number>): void {
    this.selectedColumns = selectedColumns;
  }

  isWellSelected(number: number): boolean {
    return this.selectedColumns.indexOf((number - 1) % (this.columns + 1)) != -1;
  }

  onSelectColumn (number: number) {
    if(this.isFirstColumn(number)) return;

    this.selectedColumns.push((number - 1) % (this.columns + 1));

    this.selectColumn.emit(this.selectedColumns);
  }
}
