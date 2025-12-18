import jsPDF from 'jspdf';
import { Question } from '@/data/questions';
import { ExamResult } from '@/types/exam';

interface ExportData {
  result: ExamResult;
  questions: Question[];
  answers: Record<number, number>;
}

export const exportResultsToPDF = ({ result, questions, answers }: ExportData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;
  let yPos = 20;

  // Title
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Exam Results', pageWidth / 2, yPos, { align: 'center' });
  yPos += 15;

  // Score Summary
  doc.setFontSize(14);
  doc.text(`Score: ${result.score} / ${result.totalQuestions}`, margin, yPos);
  yPos += 8;
  doc.text(`Percentage: ${result.percentage.toFixed(1)}%`, margin, yPos);
  yPos += 8;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Correct: ${result.correct} | Incorrect: ${result.incorrect} | Unattempted: ${result.unattempted}`, margin, yPos);
  yPos += 15;

  // Divider
  doc.setDrawColor(200);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 10;

  // Questions with answers
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Questions & Answers', margin, yPos);
  yPos += 10;

  questions.forEach((q, index) => {
    // Check if we need a new page
    if (yPos > 260) {
      doc.addPage();
      yPos = 20;
    }

    const userAnswer = answers[index];
    const isCorrect = userAnswer === q.correctOption;
    const isUnattempted = userAnswer === undefined;

    // Question number and text
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    
    const questionText = `Q${q.id}. ${q.question}`;
    const splitQuestion = doc.splitTextToSize(questionText, contentWidth);
    
    // Status indicator
    let status = isUnattempted ? '[NOT ATTEMPTED]' : isCorrect ? '[CORRECT]' : '[INCORRECT]';
    doc.setTextColor(isUnattempted ? 128 : isCorrect ? 0 : 255, isCorrect ? 128 : 0, 0);
    doc.text(status, pageWidth - margin, yPos, { align: 'right' });
    doc.setTextColor(0);
    
    doc.text(splitQuestion, margin, yPos);
    yPos += splitQuestion.length * 5 + 3;

    // Options
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    
    q.options.forEach((opt, optIndex) => {
      if (yPos > 275) {
        doc.addPage();
        yPos = 20;
      }

      const prefix = String.fromCharCode(65 + optIndex);
      let indicator = '';
      
      if (optIndex === q.correctOption) {
        indicator = ' [Correct Answer]';
        doc.setTextColor(0, 128, 0);
      } else if (optIndex === userAnswer && !isCorrect) {
        indicator = ' [Your Answer]';
        doc.setTextColor(255, 0, 0);
      } else if (optIndex === userAnswer && isCorrect) {
        indicator = ' [Your Answer - Correct]';
        doc.setTextColor(0, 128, 0);
      } else {
        doc.setTextColor(60);
      }

      const optionText = `${prefix}) ${opt}${indicator}`;
      const splitOption = doc.splitTextToSize(optionText, contentWidth - 5);
      doc.text(splitOption, margin + 5, yPos);
      yPos += splitOption.length * 4 + 2;
      doc.setTextColor(0);
    });

    yPos += 5;
  });

  // Footer on last page
  doc.setFontSize(8);
  doc.setTextColor(128);
  doc.text(`Generated on ${new Date().toLocaleString()}`, pageWidth / 2, 290, { align: 'center' });

  doc.save(`exam-results-${Date.now()}.pdf`);
};
