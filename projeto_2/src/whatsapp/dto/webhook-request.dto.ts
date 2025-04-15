import { ApiProperty } from '@nestjs/swagger';

export class WebhookRequestDto {
  @ApiProperty({
    description: 'ID da conta Twilio',
    example: 'AC1234567890abcdef1234567890abcdef'
  })
  AccountSid: string;

  @ApiProperty({
    description: 'ID da mensagem',
    example: 'SM1234567890abcdef1234567890abcdef'
  })
  MessageSid: string;

  @ApiProperty({
    description: 'Número do remetente',
    example: 'whatsapp:+5511999999999'
  })
  From: string;

  @ApiProperty({
    description: 'Status da mensagem',
    example: 'delivered',
    enum: ['queued', 'sent', 'delivered', 'read', 'failed']
  })
  MessageStatus: string;

  @ApiProperty({
    description: 'Texto do botão clicado (se houver)',
    example: 'Sim',
    required: false
  })
  ButtonText?: string;
} 