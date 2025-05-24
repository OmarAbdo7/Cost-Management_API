import { Injectable } from '@nestjs/common';
import { ReminderDto } from './dto/reminder.dto';

@Injectable()
export class ReminderService {
  sendReminder(reminderDto: ReminderDto): { message: string } {
    const { invoiceId, dueDate, clientContact } = reminderDto;
    const today = new Date().toISOString().split('T')[0];
    const isOverdue = today > dueDate;
    return {
      message: `Reminder for Invoice ${invoiceId} to ${clientContact}. Due: ${dueDate}. Status: ${isOverdue ? 'Overdue' : 'Upcoming'}`,
    }; // Returns a notification object
  }
}