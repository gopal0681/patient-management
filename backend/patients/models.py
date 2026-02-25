from django.db import models

class Patient(models.Model):

    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]

    fullName = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES)
    doctorName = models.CharField(max_length=100)
    insuranceProvider = models.CharField(max_length=100)
    policyNumber = models.CharField(max_length=100)
    
    def __str__(self):
        return self.fullName