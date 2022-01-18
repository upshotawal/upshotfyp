from dataclasses import fields
from rest_framework import serializers
from pages.models import Lead


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields ='__all__'