import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SchedulerService } from './scheduler.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { v4 as uuidv4 } from 'uuid';
import { IAppointment } from '../common/interfaces/scheduler.interface';

@ApiTags('medical-consultations')
@Controller('medical-consultations')
export class MedicalConsultationsController {
  constructor(private readonly schedulerService: SchedulerService) {}

  @Post()
  @ApiOperation({ summary: 'Criar consulta médica' })
  @ApiResponse({ status: 201, description: 'Consulta médica criada com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  async createMedicalConsultation(@Body() createAppointmentDto: CreateAppointmentDto) {
    const appointment: IAppointment = {
      ...createAppointmentDto,
      id: uuidv4(),
      status: 'scheduled' as const,
      notificationSent: false,
    };
    return this.schedulerService.createAppointment(appointment);
  }
} 